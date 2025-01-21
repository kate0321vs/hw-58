import * as React from 'react';

interface Props extends React.PropsWithChildren{
  type: string,
  onDismiss?: React.MouseEventHandler,
  show: boolean,
}

const Alert: React.FC<Props> = ({type, onDismiss, show, children}) => {
  return (
    <div className={`alert alert-${type} alert-dismissible show fade role="alert"`}
         style={{display: show ? "block" : "none", margin: "16px"}}>
      {onDismiss === undefined ? null :
        <>
          <button type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                  onClick={onDismiss}
          ></button>
        </>}
      {children}
    </div>
  );
};

export default Alert;