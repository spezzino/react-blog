import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./post-item.scss";

const PostItem = (props: any) => {
  const { user, title, body, id, showMoreButton } = props;
  return (
    <Card className="list-item">
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className="pos" color="textSecondary">
          by {user.name}
        </Typography>
        <Typography variant="body2" component="p">
          {body}
        </Typography>
      </CardContent>
      {showMoreButton && (
        <CardActions>
          <Button
            size="small"
            component={RouterLink}
            to={{
              pathname: `/posts/${id}`,
              state: { ...props },
            }}
          >
            View more
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  showMoreButton: PropTypes.bool,
};

PostItem.defaultProps = {
  showMoreButton: true,
};

export { PostItem };
