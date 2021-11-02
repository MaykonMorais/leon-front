import Navbar from "../components/Navbar";
import Item from "../components/Item";

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: "#FCF8F5" }}>
      <Navbar />

      <Item
        number='25'
        title='judo'
        subtitle='11-00 as 12:00'
        locale='bloco 1'
        haveLocale={true}
        haveTrash={true}
      />
    </div>
  );
};

export default LandingPage;
