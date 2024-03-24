import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
} from "@mui/material";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import BarChartIcon from "@mui/icons-material/BarChart";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { colors } from "@/utils/colors";

interface postProps {
  img: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  comments: number;
}

const PostCard = ({ post }: { post: postProps }) => {
  return (
    <Card sx={{ maxWidth: 345, position: "relative" }}>
      <Box
        sx={{
          backgroundImage: `url(${post.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <Box sx={classes.newTag}>
          <Typography color="white" fontWeight="bold">
            NEW
          </Typography>
        </Box>
      </Box>
      <CardContent>
        <Typography variant="caption">
          {post.tags.map((tag, index) => (
            <Box
              key={tag}
              component="span"
              sx={{
                color: index === 0 ? "primary.main" : "text.primary",
                mr: 2,
              }}
            >
              {tag}
            </Box>
          ))}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {post?.title}
        </Typography>
        <Typography variant="body2" color="text.disabled">
          {post?.description}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Box sx={classes.dateContainer}>
            <AccessAlarmsIcon
              color="primary"
              sx={{ mr: 1, fontSize: "16px" }}
            />
            <Typography variant="caption">{post.date}</Typography>
          </Box>
          <Box sx={classes.dateContainer}>
            <BarChartIcon
              sx={{ mr: 1, fontSize: "16px", color: colors.green }}
            />
            <Typography variant="caption">{post.comments}</Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">
          Learn More
          <NavigateNextIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;

const classes = {
  dateContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    backgroundImage: `url('/assets/png/post-1.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "300px",
  },
  newTag: {
    padding: "0 10px",
    margin: "20px 0 0 20px",
    backgroundColor: colors.red,
    display: "inline-block",
  },
};
