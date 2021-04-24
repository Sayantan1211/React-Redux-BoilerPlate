import styles from './SimpleInput.module.scss';

const SimpleInput = props => {
	return <input id={props.id} type="text" onChange={props.handleChange} onBlur={(e) => props.handleOnBlur(e, props.id)} value={props.value} />;
};

export default SimpleInput;
