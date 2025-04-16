import { useMutation } from '@tanstack/react-query';
import * as api from '@/lib/api/orders';
import { OrderStatus } from '@/types/order';

interface UpdateOrderStatusPayload {
  orderId: number;
  status: OrderStatus;
}

export const useUpdateOrderStatus = () => {
  return useMutation<void, unknown, UpdateOrderStatusPayload>({
    mutationFn: async ({ orderId, status }: UpdateOrderStatusPayload) => {
      await api.updateOrderStatus(orderId, status);
    },
    onSuccess: () => {
      console.log('Order status updated successfully');
    },
    onError: (error) => {
      console.error('Error updating order status:', error);
    },
  });
};
