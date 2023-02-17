const UserDisplay = ({ addedUser }) => {
  const unique = [...new Set(addedUser)];

  if (addedUser.length !== 0) {
    return (
      <div>
        <table className="table mt-5 table-dark">
          <thead>
            <tr>
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {unique?.map((user, id) => {
              return (
                <tr key={id}>
                  <td>{user.gender}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.name.title} {user.name.first} {user.name.last}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default UserDisplay;
