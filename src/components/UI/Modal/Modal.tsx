import BackDrop from '../BackDrop/BackDrop.tsx';
import { Buttons } from '../../../types';

interface Props extends React.PropsWithChildren {
  show: boolean;
  title?: string;
  onClose: React.MouseEventHandler;
  buttons?: Buttons[];
}

const Modal: React.FC<Props> = ({show, title = 'Custom title', onClose, buttons, children}) => {

  return (
    <>
      <BackDrop show={show} onClickBackDrop={onClose}/>
      <div className="modal show" style={{
        display: show ? 'block' : 'none',
        position: 'fixed',
        width: '500px',
        height: 'auto',
        overflow: 'auto',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <button
                className="btn ms-auto"
                onClick={onClose}
              >X
              </button>
            </div>
            <div className="p-3 mt-2 mb-2">
              {children}
            </div>
            {buttons === undefined ? null :
              <>
                <div className="modal-footer">
                  {buttons.map((button, index) => (
                    <button
                      key={index + 1}
                      className={`btn btn-${button.type}`}
                      onClick={button.onClick}
                    >
                      {button.label}
                    </button>
                  ))}
                </div>
              </>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;