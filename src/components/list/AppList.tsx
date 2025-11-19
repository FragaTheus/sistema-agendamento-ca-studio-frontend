import { List, ListItem, ListItemContent, Typography } from "@mui/joy";

const Procedures = [
  {
    id: "UUID",
    name: "LashLifting",
    description: "Ele serve pra nada",
    price: 66.99,
  },
];

export const AppList = () => {
  return (
    <List>
      {Procedures.map((p) => (
        <ListItem
          key={p.id}
          variant="soft"
          sx={{ borderRadius: "lg", mb: 1, p: 2 }}
        >
          <ListItemContent>
            <Typography level="body-lg">{p.name}</Typography>
            <Typography level="body-sm" color="neutral">
              {p.description}
            </Typography>
          </ListItemContent>

          <Typography level="title-md" fontWeight="bold">
            R$ {p.price.toFixed(2)}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
};
