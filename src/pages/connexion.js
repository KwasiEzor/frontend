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
import { setCookie } from "nookies";

const connexion = () => {
  // SEO definition

  const SEO = {
    title: "Braine Trust | Connexion",
    description: "La page de connexion pour le site Braine Trust",
  };

  const router = useRouter();

  const validationSchema = yup.object().shape({
    identifier: yup.string().required("Identifiant valide requis"),
    password: yup.string().required("Mot de passe valide requis"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const API_URL = `http://localhost:1337`;
  const onSubmit = async (data) => {
    console.log(data);

    try {
      const res = await fetch(`${API_URL}/auth/local`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const loginResponse = await res.json();
      console.log("Login infos :", loginResponse);

      if (!loginResponse.statusCode === 400) {
        console.log(loginResponse);
        return false;
      } else {
        setCookie(null, "authUser", JSON.stringify(loginResponse), {
          secure: process.env.NODE_ENV !== "development",
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        if (loginResponse.jwt) {
          router.push("/profile");
        } else {
          return false;
        }
      }
    } catch (error) {
      console.log(error);
    }
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
            <Form.Group className="mb-3" controlId="identifier">
              <Form.Label className="text-white">Votre identifiant</Form.Label>
              <Form.Control
                type="text"
                name="identifier"
                placeholder="johndoe"
                {...register("identifier")}
                className={`form-control ${
                  errors.identifier ? "is-invalid" : ""
                }`}
              />
              <p className="text-danger">{errors.identifier?.message}</p>
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
              <p className=" text-danger">{errors.password?.message}</p>
            </Form.Group>
            <Form.Group className="text-center">
              <Button
                type="submit"
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

// export async function getServerSideProps({ req }) {
//   const loginInfos = {
//     identifier: "kwasiEzor",
//     password: "Test123",
//   };
//   const res = await fetch("http://localhost:1337/auth/local", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(loginInfos),
//   });
//   const login = await res.json();
//   return {
//     props: {
//       authData: login,
//     },
//   };
// }
