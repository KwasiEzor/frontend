import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Tab,
  Nav,
  Alert,
} from "react-bootstrap";
import BigTitle from "../components/utils/BigTitle";
import countries from "../data/fr/countries.json";

// React form hook and Yup
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import * as yup from "yup";
import { NextSeo } from "next-seo";
// Validation hooks

const inscription = () => {
  // Configuration SEO

  const SEO = {
    title: "Braine Trust | Inscription",
    description: "La page d'inscription pour le site Braine Trust",
  };

  // Member and user validation form

  // Validation Schema
  const memberAndUserSchema = yup.object().shape({
    identifier: yup.string().required("Identifiant valide requis"),
    password: yup
      .string()
      .min(8, "Au moins 8 caractères")
      .matches(RegExp("(.*[a-z].*)"), "Au moins une lettre minuscule")
      .matches(RegExp("(.*[A-Z].*)"), "Au moins une lettre ne majuscule")
      .matches(RegExp("(.*\\d.*)"), "Au moins un chiffre")
      .matches(
        RegExp('[!@#$%^&*(),.?":{}|<>]'),
        "Au moins un caractère spécial"
      )
      .required("Mot de passe est requis"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "Les mots de passe doivent être identiques"
      ),
  });

  const loginFeedback = " ";
  const handleMemberSubmit = async (data) => {
    console.log("data handleMemberSubmit", data);
    const { identifier, password } = data;

    const res = await fetch("http://localhost:1337/auth/local/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: { identifier, password },
    });
    const user = await res.json();
    if (user) {
      console.log(user);
    } else {
      console.log();
    }
  };

  const handleNewUserSubmit = (data) => {
    console.log("data handleNewUserSubmit", data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(memberAndUserSchema),
    mode: "onTouched",
  });

  // Member subscribe form validation schema
  const FILE_SIZE = 900000;
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];
  // validation schema of the second form
  const newMemberSchema = yup.object().shape({
    firstname: yup
      .string()
      .min(2, "Le nom doit avoir minimum 2 caractères")
      .required("Le champ nom est requis"),
    lastname: yup
      .string()
      .min(2, "Le prénom doit avoir minimum 2 caractères")
      .required("Le champ prénom est requis"),
    email: yup.string().email().required("Le champ email est requis"),
    birthday: yup
      .date()
      .default(() => new Date())
      .nullable()
      .transform((v) => (v instanceof Date && !isNaN(v) ? v : null))
      .required("Date de naissance est requise"),

    country: yup.string().required("Le champ pays est requis"),
    city: yup.string().required("Le champ ville est requis"),
    address: yup.string().required("Le champ adresse est requis"),
    postalcode: yup.string().required("Le champ code postal est requis"),
    phoneNumber: yup.string().required("Le champ code postal est requis"),
    profile_img: yup.mixed().required("Vous devez choisir une image"),
    // .test(
    //   "fileSize",
    //   "Fichier d'image trop large",
    //   (value) => value && value.size >= FILE_SIZE
    // )
    // .test(
    //   "fileFormat",
    //   "Format non supporté",
    //   (value) => value && SUPPORTED_FORMATS.includes(value.type)
    // ),
  });
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm({
    resolver: yupResolver(newMemberSchema),
  });

  return (
    <>
      <NextSeo {...SEO} />
      <Container
        style={{ width: "100%", minHeight: "100vh", padding: " 3rem 0" }}
      >
        <BigTitle imgUrl="/assets/images/letteri.png" title="nscription" />
        <Container style={{ margin: " 3rem 0" }} className="contact__formBox">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav
                  variant="pills"
                  bg="warning"
                  className="flex-column"
                  id="subscribeNav"
                >
                  <Nav.Item>
                    <Nav.Link
                      eventKey="first"
                      className="text-white btn btn-ouline"
                    >
                      Utilisateurs
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="second"
                      className="text-white btn btn-ouline"
                      bg="warning"
                    >
                      Nouveau Membre
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  {/* Ancien Membre  */}
                  {}
                  <Tab.Pane eventKey="first" className="subscribeTabPanel">
                    {/* <Alert
                      style={{
                        width: "20rem",
                        minWidth: "80%",
                        maxWidth: "100%",
                        margin: "0 auto",
                      }}
                      variant="success"
                      className={`${
                        loginFeedback === "" ? "d-none" : "d-block"
                      }`}
                    >
                      {loginFeedback}
                    </Alert> */}
                    <Form
                      style={{
                        maxWidth: "30rem",
                        width: "100%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      onSubmit={handleSubmit(handleMemberSubmit)}
                    >
                      <Form.Group className="mb-3" controlId="identifier">
                        <Form.Label className="text-white">
                          Votre identifiant
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Entrez votre identifiant"
                          name="identifier"
                          {...register("identifier")}
                          className={`form-control ${
                            errors.identifer ? "is-invalid" : ""
                          }`}
                        />
                        <Form.Control.Feedback type="invalid" className="">
                          {errors.email?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="password">
                        <Form.Label className="text-white">
                          Votre mot de passe
                        </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Saisir mot de passe"
                          name="password"
                          {...register("password")}
                          className={`form-control ${
                            errors.password ? "is-invalid" : ""
                          }`}
                        />
                        <Form.Control.Feedback type="invalid" className="">
                          {errors.password?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="confirmPassword">
                        <Form.Label className="text-white">
                          Confirmer votre mot de passe
                        </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirmer mot de passe"
                          name="confirmPassword"
                          {...register("confirmPassword")}
                          className={`form-control ${
                            errors.confirmPassword ? "is-invalid" : ""
                          }`}
                        />
                        <Form.Control.Feedback className="validation">
                          {errors.confirmPassword?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="text-center">
                        <Button
                          type="submit"
                          variant="warning"
                          size="lg"
                          className="d-block"
                          name="btnSubscribe"
                        >
                          Envoyer
                        </Button>
                      </Form.Group>
                    </Form>
                    {/* <DevTool control={control} /> */}
                  </Tab.Pane>
                  <Tab.Pane eventKey="second" className="subscribeTabPanel">
                    {/* Nouveau Membre  */}

                    <Form
                      style={{
                        maxWidth: "30rem",
                        width: "100%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      onSubmit={handleSubmit2(handleNewUserSubmit)}
                    >
                      <Form.Group className="mb-3" controlId="firstname">
                        <Form.Label className="text-white">
                          Votre nom
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="nom@exemple.com"
                          name="firstname"
                          {...register2("firstname")}
                        />
                        <p className="text-danger">
                          {errors2.firstname?.message}
                        </p>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="lastname">
                        <Form.Label className="text-white">
                          Votre prénom
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Entrez votre prénom"
                          name="lastname"
                          {...register2("lastname")}
                        />
                        <p className="text-danger">
                          {errors2.lastname?.message}
                        </p>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="email">
                        <Form.Label className="text-white">
                          Votre email
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="nom@exemple.me"
                          name="email"
                          {...register2("email")}
                        />
                        <p className="text-danger">{errors2.email?.message}</p>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="birthday">
                        <Form.Label className="text-white">
                          Votre date de naissance
                        </Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Choisir une date"
                          name="birthday"
                          className="inputSelect"
                          {...register2("birthday")}
                        />
                        <p type="invalid" className="text-danger">
                          {errors2.birthday?.message}
                        </p>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="country">
                        <Form.Label className="text-white">
                          Votre nationalité
                        </Form.Label>
                        <Form.Select
                          defaultValue="Choisir pays"
                          name="country"
                          {...register2("country")}
                        >
                          <option>Votre pays...</option>
                          {countries.map((country) => (
                            <option key={country.id} value={country.name}>
                              {country.name}
                            </option>
                          ))}
                        </Form.Select>
                        <p className="validation">{errors2.country?.message}</p>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="address">
                        <Form.Label className="text-white">
                          Votre adresse
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Entrez votre adresse"
                          name="address"
                          {...register2("address")}
                        />
                        <p className="text-danger">
                          {errors2.address?.message}
                        </p>
                      </Form.Group>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="city">
                          <Form.Label className="text-white">Ville</Form.Label>
                          <Form.Control
                            type="text"
                            name="city"
                            placeholder="Votre ville"
                            {...register2("city")}
                          />
                          <p className="text-danger">{errors2.city?.message}</p>
                        </Form.Group>

                        <Form.Group as={Col} controlId="postalcode">
                          <Form.Label className="text-white">
                            Code postal
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Votre code postal"
                            name="postalcode"
                            {...register2("postalcode")}
                          />
                          <p className="text-danger">
                            {errors2.postalcode?.message}
                          </p>
                        </Form.Group>
                      </Row>
                      <Form.Group className="mb-3" controlId="phoneNumber">
                        <Form.Label className="text-white">
                          Numéro de téléphone
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Entrez votre numéro de téléphone"
                          name="phoneNumber"
                          {...register2("phoneNumber")}
                        />
                        <p className="text-danger">
                          {errors2.phoneNumber?.message}
                        </p>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="profile_img">
                        <Form.Label className="textShadow text-white">
                          Choisir une image
                        </Form.Label>
                        <Form.Control
                          type="file"
                          name="profileImage"
                          className="inputFile"
                          {...register2("profile_img")}
                        />
                        <p className=" text-danger">
                          {errors2.profile_img?.message}
                        </p>
                      </Form.Group>
                      <Form.Group className="text-center">
                        <Button
                          type="submit"
                          variant="warning"
                          size="lg"
                          className="d-block"
                          name="btnSubscribe"
                        >
                          Envoyer
                        </Button>
                      </Form.Group>
                    </Form>
                    {/* <DevTool control={control} /> */}
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </Container>
    </>
  );
};

export default inscription;
