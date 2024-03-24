import * as React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import Image from "next/image";
import { Box, Divider } from "@mui/material";
import Link from "next/link";

const emails = ["username@gmail.com", "user02@gmail.com"];

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
  cartItems: any;
}

export default function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open, cartItems } = props;

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <Box p={1}>
        <DialogTitle sx={{ pt: 2 }}> Cart Items </DialogTitle>
        <List>
          {cartItems?.length === 0 && (
            <Typography variant="body1" align="center" mt={2}>
              No items in cart
            </Typography>
          )}
          {cartItems?.map((item: any, index: number) => {
            return (
              <ListItem disableGutters key={index}>
                <Link
                  style={{ textDecoration: "none" }}
                  href={`/product/${item?.id}`}
                >
                  <ListItemButton onClick={() => handleListItemClick(item)}>
                    <ListItemAvatar>
                      <Avatar alt="Product Thumbnail" src={item?.thumbnail} />
                    </ListItemAvatar>
                    <Box sx={{}}>
                      <ListItemText
                        sx={{ color: "text.primary", fontWeight: 700 }}
                        primary={item?.title}
                      />
                      <ListItemText
                        sx={{
                          color: "secondary.light",
                          fontWeight: 700,
                        }}
                        primary={`$${Number(
                          (
                            item.price -
                            item.price * (item.discountPercentage / 100)
                          ).toFixed(2)
                        ).toLocaleString("en-US")}`}
                      />
                    </Box>
                  </ListItemButton>
                </Link>
              </ListItem>
            );
          })}
          <Divider />
          <ListItem
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between", px: 2 }}
          >
            <Typography variant="body1" fontWeight={"bold"}>
              Total:
            </Typography>
            <Typography variant="body1" fontWeight={"bold"}>
              {`$${Number(
                cartItems
                  ?.reduce(
                    (acc: number, item: any) =>
                      acc +
                      (item.price -
                        item.price * (item.discountPercentage / 100)),
                    0
                  )
                  .toFixed(2)
              ).toLocaleString("en-US")}`}
            </Typography>
          </ListItem>
        </List>
      </Box>
    </Dialog>
  );
}
