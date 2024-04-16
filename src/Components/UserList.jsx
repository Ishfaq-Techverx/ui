const users = [
  {
    name: "Andrew Schultz",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n 
    Vitae, in tristique senectus dui pharetra sit.`,
  },
  {
    name: "Andrew Friend",
    description: `Donec pulvinar magna non nisi tincidunt, quis .\n
     Proin sapien magna, tincidunt quis neque vitae,`,
  },
  {
    name: "Andrew Carlos",
    description: `Curabitur aliquet quam id dui posuere, vel pretium .\n 
    Phasellus eu ex semper, tincidunt tellus eget`,
  },
  {
    name: "Kandy homer",
    description: `Vestibulum ante ipsum primis in faucibus orci luctus .\n
     Posuere cubilia curae; Aenean eu leo quam.`,
  },
];

const UserList = () => {
  return (
    <>
      {users?.map(({ name, description }, index) => {
        const [desc1, _, desc2] = description?.split("\n");
        return (
          <>
            {index === 3 ? (
              <div className={"last-user"}></div>
            ) : (
              <div className={"user-list"}>
                <img
                  src={window.location.origin + "/logo192.png"}
                  className="usr-img"
                  width={64}
                  height={64}
                  alt="no img"
                />
                <div>
                  <div className="user-name">{name} </div>
                  <div className="user-description">
                    {desc1}
                    <br />
                    {desc2}
                  </div>
                </div>
              </div>
            )}
          </>
        );
      })}
    </>
  );
};

export default UserList;
