"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Stack,
  List,
  ListItem,
  ListItemContent,
  Typography,
  Alert,
} from "@mui/joy";

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export default function Users() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [alert, setAlert] = useState<{
    type: "success" | "danger";
    message: string;
  } | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");

        // Se não tiver token, redireciona para login
        if (!token) {
          setAlert({ type: "danger", message: "Faça login primeiro." });
          setTimeout(() => router.push("/auth/login"), 1000);
          return;
        }

        const res = await fetch("http://localhost:8080/api/v1/user-accounts", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error(
            `Erro na requisição: ${res.status} ${res.statusText}`
          );
        }

        const json = await res.json();
        console.log("Resposta da API:", json);

        if (!json.sucess) {
          throw new Error(json.msg || "Erro ao buscar usuários.");
        }

        setUsers(json.data);
        setAlert({
          type: "success",
          message: json.msg || "Usuários carregados!",
        });
      } catch (err: any) {
        console.error("Erro ao buscar usuários:", err);
        setAlert({
          type: "danger",
          message: err.message || "Erro ao buscar usuários.",
        });
      }
    };

    fetchUsers();
  }, [router]);

  return (
    <Stack spacing={2} width="80%" margin="0 auto" mt={4}>
      {alert && (
        <Alert
          color={alert.type === "success" ? "success" : "danger"}
          variant="soft"
        >
          {alert.message}
        </Alert>
      )}

      <Typography level="h4">Lista de Usuários</Typography>

      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemContent>
              <Typography>
                <strong>Nome:</strong> {user.name}
              </Typography>
              <Typography>
                <strong>Email:</strong> {user.email}
              </Typography>
            </ListItemContent>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
