import React from 'react';
import { connect } from 'react-redux';
import { incrementar, decrementar } from '../redux/actions';

const ContadorRedux = ({ contador, incrementar, decrementar }) => {
    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    );
};

const mapStateToProps = state => ({
    contador: state.contador,
});

const mapDispatchToProps = { incrementar, decrementar };

export default connect(mapStateToProps, mapDispatchToProps)(ContadorRedux);
