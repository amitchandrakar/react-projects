import React, { useState } from 'react';
import { Button } from "./Button";
import { evaluate } from 'mathjs';

function Calculator(props) {

    let [input, setInput] = useState(0);

    const styles = {
        app: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%'
        },
        calcWrapper: {
            width: '400px',
            height: '600px'
        },
        row: {
            display: 'flex',
            width: '100%'
        },
        clearBtn: {
            height: '4em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'lighter',
            fontSize: '1.4em',
            backgroundColor: '#c5c3cd',
            color: '#000000',
            flex: 1,
            outline: '1px solid #888888',
        }
    }

    let handleClick = (val) => {
        input = input === 0 ? '' : input;

        let newValue = input + val;
        setInput(newValue);
    }
    
    let handleTotal = (val) => {
        setInput(evaluate(input));
    }
    
    let clearAll = () => {
        setInput(0);
    }

    return (
        <div style={styles.app}>
        <div style={styles.calcWrapper}>
        <div className="input">{input}</div>
          <div style={styles.row}>
            <Button handleClick={handleClick}>7</Button>
            <Button handleClick={handleClick}>8</Button>
            <Button handleClick={handleClick}>9</Button>
            <Button handleClick={handleClick}>/</Button>
          </div>
          <div style={styles.row}>
            <Button handleClick={handleClick}>4</Button>
            <Button handleClick={handleClick}>5</Button>
            <Button handleClick={handleClick}>6</Button>
            <Button handleClick={handleClick}>*</Button>
          </div>
          <div style={styles.row}>
            <Button handleClick={handleClick}>1</Button>
            <Button handleClick={handleClick}>2</Button>
            <Button handleClick={handleClick}>3</Button>
            <Button handleClick={handleClick}>+</Button>
          </div>
          <div style={styles.row}>
            <Button handleClick={handleClick}>.</Button>
            <Button handleClick={handleClick}>0</Button>
            <Button handleClick={handleTotal}>=</Button>
            <Button handleClick={handleClick}>-</Button>
          </div>
          <div style={styles.row} onClick={() => { clearAll() }}>
            <div style={styles.clearBtn}>
                Clear All
            </div>
          </div>
        </div>
      </div>
    );
}

export default Calculator;