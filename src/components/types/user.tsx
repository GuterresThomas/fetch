// Definição do tipo para a propriedade "hair"

type HairType = {
    color: string;
    type: string;
  };
  
  // Definição do tipo para a propriedade "users"
  type User = {
    id: number;
    firstName: string;
    lastName: string;
    maidenName?: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: HairType;
  };
  
  // Exemplo de uso do tipo "User"
  const users: User[] = [
    {
      id: 1,
      firstName: "Terry",
      lastName: "Medhurst",
      maidenName: "Smitham",
      age: 50,
      gender: "male",
      email: "atuny0@sohu.com",
      phone: "+63 791 675 8914",
      username: "atuny0",
      password: "9uQFF1Lh",
      birthDate: "2000-12-25",
      image: "https://robohash.org/hicveldicta.png?size=50x50&set=set1",
      bloodGroup: "A",
      height: 189,
      weight: 75.4,
      eyeColor: "Green",
      hair: {
        color: "Black",
        type: "Strands",
      },
    },
    // Pode adicionar outros objetos de usuário aqui
  ];

    export default users;
  