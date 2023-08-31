import Toast from 'react-native-root-toast';

type ToastVariant = 'success' | 'error' | 'warning';

const useToast = () => {
  const showToast = (message: string, variant: ToastVariant = 'success') => {
    const IconToVariant: Record<ToastVariant, string> = {
      success: '✔️  ',
      error: '❌  ',
      warning: '⚠️  ',
    };

    Toast.show(`${IconToVariant[variant]}${message}`, {
      textStyle: {
        fontFamily: 'nunito-extrabold',
        fontSize: 12,
      },
      containerStyle: {
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 16,
      },
    });
  };

  return showToast;
};

export default useToast;
