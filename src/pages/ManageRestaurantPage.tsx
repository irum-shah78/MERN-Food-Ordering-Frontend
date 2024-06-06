import { useCreateMyRestaurat, useGetMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurat();
  const { restaurant } = useGetMyRestaurant();

  return <ManageRestaurantForm restaurant={restaurant} onSave={createRestaurant} isLoading={isLoading} />;
};

export default ManageRestaurantPage;