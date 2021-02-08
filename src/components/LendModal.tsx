import React, { useState, useCallback, useContext } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import { Nft, PaymentToken } from "../types";
import FunnySpinner from "./Spinner";
import RainbowButton from "./RainbowButton";
import CssTextField, { CssSelect } from "./CssTextField";
import Modal from "./Modal";
import {
  RentNftContext,
  CurrentAddressContext,
} from "../hardhat/SymfoniContext";

// TODO: this is a copy of what we have in RentModal
const useStyles = makeStyles({
  form: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  inputs: {
    display: "flex",
    flexDirection: "column",
    padding: "32px",
    // matches direct div children of inputs
    "& > div": {
      marginBottom: "16px",
    },
    margin: "0 auto",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

type ValueValid = {
  value: string;
  valid: boolean;
};

type LendOneInputs = {
  maxDuration: ValueValid;
  borrowPrice: ValueValid;
  nftPrice: ValueValid;
};

type LendModalProps = {
  nft: Nft;
  open: boolean;
  setOpen: (open: boolean) => void;
};

type ApproveButtonProps = {
  nft: Nft;
};

const ApproveButton: React.FC<ApproveButtonProps> = ({ nft }) => {
  const [currentAddress] = useContext(CurrentAddressContext);
  const { instance: renft } = useContext(RentNftContext);

  const handleApproveAll = useCallback(async () => {
    if (!currentAddress || !renft) return;
    await nft.contract.setApprovalForAll(renft.address, true);
  }, [currentAddress, renft, nft.contract]);

  return (
    <button
      type="button"
      style={{
        border: "3px solid black",
      }}
      className="Product__button"
      onClick={handleApproveAll}
    >
      Approve all
    </button>
  );
};

const LendModal: React.FC<LendModalProps> = ({ nft, open, setOpen }) => {
  const classes = useStyles();
  const [currentAddress] = useContext(CurrentAddressContext);
  const [pmtToken, setPmtToken] = useState<PaymentToken>(PaymentToken.DAI);
  const { instance: renft } = useContext(RentNftContext);

  const [lendOneInputs, setLendOneInputs] = useState<LendOneInputs>({
    maxDuration: {
      value: "7",
      valid: true,
    },
    borrowPrice: {
      value: "10",
      valid: true,
    },
    nftPrice: {
      value: "100",
      valid: true,
    },
  });

  const [isBusy, setIsBusy] = useState(false);

  const handleLend = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!nft || !renft) return;
      // need to approve if it wasn't: nft
      // console.log(instance.lend);

      await renft.lend(
        [nft.contract.address],
        [nft.tokenId],
        ["3"],
        ["0x00000011"],
        ["0x00000101"],
        ["1"]
      );
    },
    [nft, renft]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // ! this wasted an hour of my life: https://duncanleung.com/fixing-react-warning-synthetic-events-in-setstate/
    e.persist();
    const target = e.target.name;
    const val = e.target.value;

    // let valid = true;
    // if (target === "maxDuration") {
    //   valid = checkMaxDuration(val);
    // } else if (target === "borrowPrice" || target === "nftPrice") {
    //   valid = checkPrice(val);
    // }

    setLendOneInputs((lendOneInputs) => ({
      ...lendOneInputs,
      [target]: {
        value: val,
        valid: true,
      },
    }));
  };

  const handleTokenChange = useCallback(
    (
      event: React.ChangeEvent<{
        value: unknown;
      }>
    ) => {
      setPmtToken(event.target.value as PaymentToken);
    },
    []
  );

  const checkPrice = (n: string) => {
    return n !== "" && Number(n) >= 0;
  };

  const checkMaxDuration = (n: string) => {
    return !n.includes(".") && checkPrice(n);
  };

  // const allValid = useMemo(() => {
  //   return Object.values(lendOneInputs).every((item) => item.valid);
  // }, [lendOneInputs]);

  // this will ensure that spinner halts if the user rejects the txn
  // const handleApproveAll = useCallback(async () => {
  //   setIsBusy(true);
  //   let updateSuccess = false;

  //   try {
  //     await face.approveAll();
  //     updateSuccess = true;
  //   } catch (e) {
  //     console.debug("could not approve all the faces");
  //   }

  //   if (updateSuccess) setIsApproved(true);
  //   setIsBusy(false);
  // }, [face]);

  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  const preventDefault = (e: React.FormEvent) => e.preventDefault();

  return (
    <Modal open={open} handleClose={handleClose}>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleLend}
        className={classes.form}
        style={{ padding: "32px" }}
      >
        <Box className={classes.inputs}>
          <CssTextField
            required
            error={!lendOneInputs.maxDuration.valid}
            label="Max lend duration"
            id="maxDuration"
            variant="outlined"
            value={lendOneInputs.maxDuration.value}
            type="number"
            helperText={
              !lendOneInputs.maxDuration.valid ? "Must be a natural number" : ""
            }
            onChange={handleChange}
            name="maxDuration"
            disabled={isBusy}
          />
          <CssTextField
            required
            error={!lendOneInputs.borrowPrice.valid}
            label="Borrow Price"
            id="borrowPrice"
            variant="outlined"
            value={lendOneInputs.borrowPrice.value}
            type="number"
            helperText={
              !lendOneInputs.borrowPrice.valid
                ? "Must be a zero or a positive decimal"
                : ""
            }
            onChange={handleChange}
            name="borrowPrice"
            disabled={isBusy}
          />
          <CssTextField
            required
            error={!lendOneInputs.nftPrice.valid}
            label="Collateral"
            id="nftPrice"
            variant="outlined"
            value={lendOneInputs.nftPrice.value}
            type="number"
            helperText={
              !lendOneInputs.nftPrice.valid
                ? "Must be a zero or a positive decimal"
                : ""
            }
            onChange={handleChange}
            name="nftPrice"
            disabled={isBusy}
          />
          <FormControl variant="outlined">
            <InputLabel id="pmtToken" style={{ color: "white" }}>
              Pmt. Token *&nbsp;
            </InputLabel>
            <CssSelect
              required
              labelId="pmtToken"
              id="pmtToken"
              name="pmtToken"
              value={pmtToken}
              onChange={handleTokenChange}
              label="Payment Token"
              variant="outlined"
            >
              <MenuItem value={PaymentToken.DAI}>DAI</MenuItem>
              <MenuItem value={PaymentToken.USDC}>USDC</MenuItem>
              <MenuItem value={PaymentToken.USDT}>USDT</MenuItem>
              <MenuItem value={PaymentToken.TUSD}>TUSD</MenuItem>
            </CssSelect>
          </FormControl>
        </Box>
        <Box>{isBusy && <FunnySpinner />}</Box>
        <Box className={classes.buttons}>
          {!nft.isApprovedForAll && <ApproveButton nft={nft} />}
          <RainbowButton type="submit" text="Lend" disabled={false} />
        </Box>
      </form>
    </Modal>
  );
};

export default LendModal;
