import { Link as RouterLink } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { util, ZodErrorMap, ZodIssueCode, ZodParsedType } from "zod";

import { z } from "zod";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  Link,
} from "@mui/material";
import { postAuthLoginBody } from "../../../api/generated/schema/zod";

// TODO: 切り出し
export const Login: React.FC = () => {
  const errorMap: ZodErrorMap = (issue, _ctx) => {
    let message: string;
    switch (issue.code) {
      case ZodIssueCode.invalid_type:
        if (issue.received === ZodParsedType.undefined) {
          message = "必須";
        } else {
          message = `期待値 ${issue.expected}、受け取った値 ${issue.received}`;
        }
        break;
      case ZodIssueCode.invalid_literal:
        message = `無効なリテラル値、期待値 ${JSON.stringify(
          issue.expected,
          util.jsonStringifyReplacer
        )}`;
        break;
      case ZodIssueCode.unrecognized_keys:
        message = `オブジェクト内で認識されないキー：${util.joinValues(
          issue.keys,
          ", "
        )}`;
        break;
      case ZodIssueCode.invalid_union:
        message = `無効な入力`;
        break;
      case ZodIssueCode.invalid_union_discriminator:
        message = `無効なディスクリミネータ値。期待値 ${util.joinValues(
          issue.options
        )}`;
        break;
      case ZodIssueCode.invalid_enum_value:
        message = `無効な列挙値。期待値 ${util.joinValues(
          issue.options
        )}、受け取った値 '${issue.received}'`;
        break;
      case ZodIssueCode.invalid_arguments:
        message = `無効な関数引数`;
        break;
      case ZodIssueCode.invalid_return_type:
        message = `無効な関数の戻り値の型`;
        break;
      case ZodIssueCode.invalid_date:
        message = `無効な日付`;
        break;
      case ZodIssueCode.invalid_string:
        if (typeof issue.validation === "object") {
          if ("includes" in issue.validation) {
            message = `無効な入力： "${issue.validation.includes}" を含む必要があります`;
            if (typeof issue.validation.position === "number") {
              message = `${message} 位置 ${issue.validation.position} 以上で一つ以上`;
            }
          } else if ("startsWith" in issue.validation) {
            message = `無効な入力： "${issue.validation.startsWith}" で始まる必要があります`;
          } else if ("endsWith" in issue.validation) {
            message = `無効な入力： "${issue.validation.endsWith}" で終わる必要があります`;
          } else {
            util.assertNever(issue.validation);
          }
        } else if (issue.validation !== "regex") {
          message = `無効な${
            issue.validation === "email" && "メールアドレスです"
          }`;
        } else {
          message = "無効";
        }
        break;
      case ZodIssueCode.too_small:
        if (issue.type === "array")
          message = `配列は ${
            issue.exact ? "ちょうど" : issue.inclusive ? `少なくとも` : `以上`
          } ${issue.minimum} 要素を含む必要があります`;
        else if (issue.type === "string")
          message = `文字列は ${
            issue.exact ? "ちょうど" : issue.inclusive ? `少なくとも` : `以上`
          } ${issue.minimum} 文字を含む必要があります`;
        else if (issue.type === "number")
          message = `数値は ${
            issue.exact
              ? `ちょうど `
              : issue.inclusive
              ? `以上 `
              : `より大きい `
          }${issue.minimum} である必要があります`;
        else if (issue.type === "date")
          message = `日付は ${
            issue.exact
              ? `ちょうど `
              : issue.inclusive
              ? `以上 `
              : `より大きい `
          }${new Date(Number(issue.minimum))} である必要があります`;
        else message = "無効な入力";
        break;
      case ZodIssueCode.too_big:
        if (issue.type === "array")
          message = `配列は ${
            issue.exact ? `ちょうど` : issue.inclusive ? `以下` : `未満`
          } ${issue.maximum} 要素を含む必要があります`;
        else if (issue.type === "string")
          message = `文字列は ${
            issue.exact ? `ちょうど` : issue.inclusive ? `以下` : `未満`
          } ${issue.maximum} 文字を含む必要があります`;
        else if (issue.type === "number")
          message = `数値は ${
            issue.exact ? `ちょうど` : issue.inclusive ? `以下` : `未満`
          } ${issue.maximum} である必要があります`;
        else if (issue.type === "bigint")
          message = `BigIntは ${
            issue.exact ? `ちょうど` : issue.inclusive ? `以下` : `未満`
          } ${issue.maximum} である必要があります`;
        else if (issue.type === "date")
          message = `日付は ${
            issue.exact ? `ちょうど` : issue.inclusive ? `以下` : `未満`
          } ${new Date(Number(issue.maximum))} である必要があります`;
        else message = "無効な入力";
        break;
      case ZodIssueCode.custom:
        message = `無効な入力`;
        break;
      case ZodIssueCode.invalid_intersection_types:
        message = `交差型の結果をマージできませんでした`;
        break;
      case ZodIssueCode.not_multiple_of:
        message = `数値は ${issue.multipleOf} の倍数である必要があります`;
        break;
      case ZodIssueCode.not_finite:
        message = "数値は有限である必要があります";
        break;
      default:
        message = _ctx.defaultError;
        util.assertNever(issue);
    }
    return { message };
  };

  z.setErrorMap(errorMap);

  // zodスキーマから型を推論
  type LoginData = z.infer<typeof postAuthLoginBody>;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(postAuthLoginBody),
  });
  const onSubmit: SubmitHandler<LoginData> = (data) => console.log(data);

  console.log(watch("email"));

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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            ログイン
          </Button>
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
