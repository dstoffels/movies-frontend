import './TextField.css';

const TextField = ({ label, value, onChange, type = 'text' }) => {
	return (
		<div className="text-field">
			<label>{label}</label>
			<input value={value} onChange={(e) => onChange(e.target.value)} type={type} />
		</div>
	);
};

export default TextField;
