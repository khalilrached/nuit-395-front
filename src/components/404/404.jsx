import { Button, Result } from "antd";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NotFound = (props) => {
  const { subTitle, children } = props;

  return (
    <Result
      status="404"
      title="404"
      subTitle={
        subTitle || "Désolé, la page que vous avez visitée n'existe pas."
      }
      extra={
        children ? (
          children
        ) : (
          <Link to="/">
            <Button type="default">Retour à l'accueil</Button>
          </Link>
        )
      }
    />
  );
};

NotFound.propTypes = {
  subTitle: PropTypes.string,
  children: PropTypes.any,
};

export default NotFound;
