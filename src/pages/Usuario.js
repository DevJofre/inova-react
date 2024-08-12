import User from "../Components/User/UserProfile";

const Usuario = () => {
  const user = {
    name: "João",
    surname: "Silva",
    email: "joao.silva@example.com",
    cpf: "123.456.789-00",
    city: "São Paulo",
    state: "SP",
    street: "Rua Exemplo",
    number: "100",
    zip: "01000-000",
    profilePicture: "path/to/profile-pic.jpg", // Substitua pelo caminho correto da imagem
  };

  return (
    <>
      <User user={user} />
    </>
  );
};

export default Usuario;
