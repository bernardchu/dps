export const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80vw',
    width: '500px',
    maxHeight: '70vh'
  },
  overlay: {
    zIndex: '1001' // necessary to overcome 1000 set by default on hamburger
  }
};