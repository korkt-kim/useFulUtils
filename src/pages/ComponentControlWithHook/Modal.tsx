import { useModal } from "../../components/modal/hooks/useModal";
import { useModalCtrl } from "../../components/modal/hooks/useModalCtrl";

export const Modal = () => {
  const [modal, modalCtx] = useModal();

  return (
    <>
      <button
        onClick={() =>
          modal.open({
            closeOnEscape: true,
            closeOnDimmedClick: true,
            component: () => <TestModal />,
          })
        }
      >
        open
      </button>
      {modalCtx}
    </>
  );
};

const TestModal = () => {
  const { close } = useModalCtrl();
  return (
    <div>
      <button onClick={() => close()}>close</button>
      test
    </div>
  );
};
