import login_img from '../Components/login_img.jpg'
const UserMain = () => {
  return (
    <div className="user_container">
      <div className="user_details_container">
        <h3>User Details</h3>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.</p>
    <input type="radio" id="all"/>
    <lable htmlFor="all">ALL</lable>
    <input type="radio" id="male"/>
    <lable htmlFor="male">Male</lable>
    <input type="radio" id="female"/>
    <lable htmlFor="female">Female</lable>
      </div>
      
        <div className="user_table_container">
            <table id="user_table" rules="rows">
                <thead>
                    <tr>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>GENDER</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>imag</td>
                        <td>lalan</td>
                        <td>lalldlff353433@gmail.com</td>
                        <td>female</td>
                    </tr>
                    <tr>
                        <td>imag</td>
                        <td>lalan</td>
                        <td>lalldlff353433@gmail.com</td>
                        <td>female</td>
                    </tr>
                    <tr>
                        <td><img alt="img" src={{login_img}}/></td>
                        <td>lalan</td>
                        <td>lalldlff353433@gmail.com</td>
                        <td>female</td>
                    </tr>
                </tbody>
            </table>

        </div>
     
    </div>
  );
};
export default UserMain;
