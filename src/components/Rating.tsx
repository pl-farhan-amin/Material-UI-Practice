import { FavoriteBorderTwoTone, FavoriteTwoTone } from "@mui/icons-material";
import { Box, Rating, Stack } from "@mui/material";
import React, { useState } from "react";

export const MUIRating = () => {
  const [rating, setRating] = useState<number | null>(null);

  const handleRating = (
    event: React.ChangeEvent<{}>,
    updatedValue: number | null
  ) => {
    setRating(updatedValue);
  };

  return (
    <Stack spacing={4} direction={"column"}>
      <Box>
        <Rating value={rating} onChange={handleRating} precision={0.5} />
      </Box>
      <Box>
        <Rating
          value={rating}
          onChange={handleRating}
          precision={0.25}
          icon={<FavoriteTwoTone color="error" fontSize="small" />}
          emptyIcon={<FavoriteBorderTwoTone fontSize="small" color="error" />}
        />
      </Box>
    </Stack>
  );
};
