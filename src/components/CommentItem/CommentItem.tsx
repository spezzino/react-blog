import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./comment-item.scss";

const CommentItem = (props: any) => {
  const { name, body } = props;
  return (
    <Card className="comment-item">
      <CardContent>
        <Typography variant="h6" component="h4">
          {name} 
        </Typography>
        <Typography variant="body2" component="p">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export { CommentItem };
