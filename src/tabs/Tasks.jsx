import { useState } from 'react';
import Counter from '../components/Counter/Counter';
import Text from '../components/Text/Text';

const Tasks = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);
  const [step, setStep] = useState(1);

  const updateCounterConfig = e => {
    const { name, value } = e.target;
    const normalizedValue = Number(value);
    if (name === 'min') setMin(normalizedValue);
    if (name === 'max') setMax(normalizedValue);
    if (name === 'step') setStep(normalizedValue);
  };

  const config = { min, max, step };

  return (
    <>
      <Text textAlign="center" marginBottom>
        Counter
      </Text>
      <CounterConfig update={updateCounterConfig} {...config} />
      {/* Task Counter */}
      <Counter />
    </>
  );
};

export default Tasks;

const CounterConfig = ({ update, min, max, step }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>
        <input type="number" name="min" value={min} onChange={update} />
        <span>MIN</span>
      </label>
      <label>
        <input type="number" name="max" value={max} onChange={update} />
        <span>MAX</span>
      </label>
      <label>
        <input type="number" name="step" value={step} onChange={update} />
        <span>STEP</span>
      </label>
    </div>
  );
};
