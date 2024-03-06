import Avatar from "@/ui/avatar/avatar";
import ListItem from "@/ui/list-item/list-item";
import ListItemAvatar from "@/ui/list-item-avatar/list-item-avatar";
import ListItemText from "@/ui/list-item-text/list-item-text";
import Typography from "@/ui/typography/typography";

export default function Article({ article }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={article.image} alt={article.title} />
      </ListItemAvatar>
      <ListItemText primary={article.title} link={article.link}>
        <Typography>{article.abstract}</Typography>
      </ListItemText>
    </ListItem>
  );
}
