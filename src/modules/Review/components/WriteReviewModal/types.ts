export interface WriteReviewModalProps {
  open: boolean;
  onClose: () => void;
  restaurantId: number;
  refetch: () => void;
}
