import { useCreateMyRestaurat } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurat();
  return <ManageRestaurantForm onSave={createRestaurant} isLoading={isLoading} />;
};

export default ManageRestaurantPage;