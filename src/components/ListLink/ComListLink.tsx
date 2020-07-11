import React, {ComponentProps} from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { Link } from 'react-router-dom';

const ListItemLink = (props: any)=> {
  const { Icon, primary, to } = props;

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps:ComponentProps<any>, ref?: React.Ref<HTMLButtonElement>) => (
        <Link ref={ref} to={to} {...linkProps} />
      )),
    [to],
  );

  return (
    <li>
      <ListItem button component={CustomLink}>
        <ListItemIcon><Icon/></ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

export default ListItemLink