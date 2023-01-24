import "./_fee-navigation.scss";
import Blue from "../../assets/blue.png";

const data1 = [
  "Abusive, defamatory or obscene",
  "Fraudulent, deceptive or misleading",
  "In violation of any intellectual property right of another",
  "In violation of any law or regulation",
  "Otherwise offensive in image or language",
];
export const FeeNavigation = () => {
  const listItems = data1.map((fee) => (
    <li>
      <img className="col-md-12 dot" src={Blue} alt="Scholar" />
      <Link> {fee}</Link>
    </li>
  ));
  return (
    <>
      <div className="fee-navigation-container">
        {" "}
        <ul className="list-unstyled">{listItems}</ul>
      </div>
    </>
  );
};
