import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Typography,
  Avatar,
  Link,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { z } from "zod";
import { Link as RouterLink } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { postRegisterBody } from "../../../api/generated/schema/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { postRegisterApi } from "../api/postRegister";

export const Register: React.FC = () => {
  type RegisterData = z.infer<typeof postRegisterBody>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(postRegisterBody),
  });

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<RegisterData> = async (data) => {
    setLoading(true);
    await postRegisterApi(data);
    setLoading(false);

    // TODO: エラーハンドリング
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
        <Typography component="h1" variant="h5">
          新規登録
        </Typography>
        <Box
          onSubmit={handleSubmit(onSubmit)}
          component="form"
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="ユーザー名"
            autoComplete="username"
            autoFocus
            error={Boolean(errors.username)}
            helperText={errors.username && errors.username.message}
            {...register("username")}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="メールアドレス"
            autoComplete="email"
            error={Boolean(errors.email)}
            helperText={errors.email && errors.email.message}
            {...register("email")}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="パスワード"
            type="password"
            id="password"
            autoComplete="new-password"
            error={Boolean(errors.password)}
            helperText={errors.password && errors.password.message}
            {...register("password")}
          />
          <LoadingButton
            loading={loading}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            登録
          </LoadingButton>
          <Typography variant="body2" align="center">
            すでにアカウントをお持ちですか？{" "}
            <Link component={RouterLink} to="/login" variant="body2">
              ログイン
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
