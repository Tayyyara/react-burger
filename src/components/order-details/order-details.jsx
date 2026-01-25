import ReactDOM from 'react-dom';
import styles from './order-details.module.css';
import Modal from '../modal/modal';
import doneImage from '../../images/done.png';

const OrderDetails = ({isOpen, setIsOpen, orderNumber}) => {

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className={styles.modalContent}>
        <p className={`text text_type_digits-large ${styles.number}`}>{orderNumber}</p>
        <p className="text text_type_main-medium">идентификатор заказа</p>
        <img className={styles.image} src={doneImage} alt="Заказ принят"/>
        <p className="text text_type_main-default">Ваш заказ начали готовить</p>
        <p className={`text text_type_main-default ${styles.secondary}`}>Дождитесь готовности на орбитальной станции</p>
      </div>
    </Modal>
  )
}

export default OrderDetails;