import { Container, Form, Button } from "react-bootstrap";
import BigTitle from "../components/utils/BigTitle";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import { parseCookies } from "../../lib/parseCookie";
import cookie from "cookie";
import { NextSeo } from "next-seo";
export async function getServerSideProps({ req }) {
  const loginInfos = {
    identifier: "kwasiEzor",
    password: "Test123",
  };
  const res = await fetch("http://localhost:1337/auth/local", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginInfos),
  });
  const login = await res.json();
  return {
    props: {
      authData: login,
    },
  };
}
const connexion = ({ authData }) => {
  // SEO definition

  const SEO = {
    title: "Braine Trust | Connexion",
    description: "La page de connexion pour le site Braine Trust",
  };
  // const [authCookie, setAuthCookie] = useState(null);
  console.log(authData);
  const router = useRouter();

  if (authData) {
    Cookie.set("authUser", authData.user);
    Cookie.set("authJWT", authData.jwt);
  } else {
    console.log(" 403 Unauthorized user, need to log in");
    router.push("/connexion");
  }
  const validationSchema = yup.object().shape({
    email: yup.string().required("Email valide requis").email(),
    password: yup.string().required("Mot de passe valide requis"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    alert("ok");
    console.log(data);
  };
  return (
    <>
      <NextSeo {...SEO} />
      <Container
        style={{ width: "100%", minHeight: "70vh", padding: " 3rem 0" }}
      >
        <BigTitle imgUrl="/assets/images/letterC.png" title="onnexion" />
        <Container
          style={{ display: "grid", placeItems: "center", margin: " 3rem 0" }}
          className="contact__formBox"
        >
          <Form
            style={{ maxWidth: "30rem", width: "100%" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="text-white">
                Votre adresse Email
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="nom@exemple.com"
                {...register("email")}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              <p className="validation">{errors.email?.message}</p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="text-white">Votre mot de passe</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Saisir mot de passe"
                {...register("password")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              <p className="validation">{errors.password?.message}</p>
            </Form.Group>
            <Form.Group className="text-center">
              <Button
                type="button"
                variant="warning"
                size="lg"
                className="d-block"
              >
                Envoyer
              </Button>
            </Form.Group>
          </Form>
        </Container>
      </Container>
    </>
  );
};

export default connexion;
