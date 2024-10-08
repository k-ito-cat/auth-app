import { Link as RouterLink } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Container,
  Box,
  TextField,
  Typography,
  Avatar,
  Link,
} from "@mui/material";
import { postLoginBody } from "../../../api/generated/schema/zod";
import { postLoginApi } from "../api/postLogin";
import { LoadingButton } from "@mui/lab";

export const Login: React.FC = () => {
  // zodスキーマから型を推論
  type LoginData = z.infer<typeof postLoginBody>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>({
    resolver: zodResolver(postLoginBody),
  });

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    const response = await postLoginApi(data);
    console.log(response);
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
          ログイン
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
            id="email"
            label="メールアドレス"
            autoComplete="email"
            autoFocus
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
            {...register("email")}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="パスワード"
            type="password"
            id="password"
            autoComplete="current-password"
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
            {...register("password")}
          />
          <LoadingButton
            loading={isSubmitting}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            ログイン
          </LoadingButton>
          <Typography variant="body2" align="center">
            新規登録は
            <Link component={RouterLink} to="/register" variant="body2">
              こちら
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
