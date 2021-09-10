import { Container, Row, Col, Form, Button, Tab, Nav } from "react-bootstrap";
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
  const memberAndUserSchema = yup.object().shape({
    email: yup.string().email().required("Email valide requis"),
    password: yup
      .string()
      .min(8)
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
  const handleMemberSubmit = (data) => {
    console.log(data);
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(memberAndUserSchema),
  });

  // Member subscribe form validation schema
  const FILE_SIZE = 160 * 1024;
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];
  const newMemberSchema = yup.object().shape({
    firstname: yup
      .string()
      .min(2, "Le nom doit avoir minimum 2 caractères")
      .required("Le champ nom est requis"),
    lastname: yup
      .string()
      .min(2, "Le prénom doit avoir minimum 2 caractères")
      .required("Le champ prénom est requis"),
    birthday: yup
      .string()
      .required("Date de naissance est requise")
      .matches(
        /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
        "Date doit correspondre au format YYYY-MM-DD"
      ),
    country: yup.string().required("Le champ pays est requis"),
    address: yup.string().required("Le champ adresse est requis"),
    city: yup.string().required("Le champ ville est requis"),
    postalcode: yup.string().required("Le champ code postal est requis"),
    phoneNumber: yup.string().required("Le champ code postal est requis"),
    profile_img: yup
      .mixed()
      .required("Vous devez choisir une image")
      .test(
        "fileSize",
        "Fichier d'image trop large",
        (value) => value && value.size <= FILE_SIZE
      )
      .test(
        "fileFormat",
        "Format non supporté",
        (value) => value && SUPPORTED_FORMATS.includes(value.type)
      ),
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
                    <Form
                      style={{
                        maxWidth: "30rem",
                        width: "100%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      onSubmit={handleSubmit(handleMemberSubmit)}
                    >
                      <Form.Group className="mb-3" controlId="email">
                        <Form.Label className="text-white">
                          Votre adresse Email
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="nom@exemple.com"
                          name="email"
                          {...register("email")}
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                        />
                        <p className="validation">{errors.email?.message}</p>
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
                        <p className="validation">{errors.password?.message}</p>
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
                        <p className="validation">
                          {errors.confirmPassword?.message}
                        </p>
                      </Form.Group>
                      <Form.Group className="text-center">
                        <Button
                          type="button"
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
                      onSumit={handleSubmit(null)}
                    >
                      <Form.Group className="mb-3" controlId="firstname">
                        <Form.Label className="text-white">
                          Votre nom
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="nom@exemple.com"
                          name="firstname"
                          {...register("firstname")}
                        />
                        <p className="validation">
                          {errors.firstname?.message}
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
                          {...register("lastname")}
                        />
                        <p className="validation">{errors.lastname?.message}</p>
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
                          {...register("birthday")}
                        />
                        <p className="validation">{errors.birthday?.message}</p>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="country">
                        <Form.Label className="text-white">
                          Votre nationalité
                        </Form.Label>
                        <Form.Select
                          defaultValue="Choisir pays"
                          name="country"
                          {...register("country")}
                        >
                          <option>Votre pays...</option>
                          {countries.map((country) => (
                            <option key={country.id} value={country.name}>
                              {country.name}
                            </option>
                          ))}
                        </Form.Select>
                        <p className="validation">{errors.country?.message}</p>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="address">
                        <Form.Label className="text-white">
                          Votre adresse
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Entrez votre adresse"
                          name="address"
                          {...register("address")}
                        />
                        <p className="validation">{errors.address?.message}</p>
                      </Form.Group>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="city">
                          <Form.Label className="text-white">Ville</Form.Label>
                          <Form.Control
                            type="text"
                            name="city"
                            placeholder="Votre ville"
                            {...register("city")}
                          />
                          <p className="validation">{errors.city?.message}</p>
                        </Form.Group>

                        <Form.Group as={Col} controlId="postalcode">
                          <Form.Label className="text-white">
                            Code postal
                          </Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Votre code postal"
                            name="postalcode"
                            {...register("postalcode")}
                          />
                          <p className="validation">
                            {errors.postalcode?.message}
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
                          {...register("phoneNumber")}
                        />
                        <p className="validation">
                          {errors.phoneNumber?.message}
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
                          {...register("profile_img")}
                        />
                        <p className="validation">
                          {errors.profile_img?.message}
                        </p>
                      </Form.Group>
                      <Form.Group className="text-center">
                        <Button
                          type="button"
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
