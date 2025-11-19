import { List, ListItem, ListItemContent, Typography } from "@mui/joy";

const Procedures = [
  {
    id: "UUID",
    name: "LashLifting",
    description:
      "Procedimento de elevação natural dos cílios, dando mais curvatura, definição e destaque ao olhar, sem necessidade de extensões...",
    price: 79.9,
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
            <Typography
              level="body-sm"
              color="neutral"
              sx={{ overflow: "hidden" }}
            >
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
