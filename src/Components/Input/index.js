import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container, Input, InputSpan } from './styles';

export default function InputContainer({ name, span, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <InputSpan>{span}</InputSpan>
      <Input ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  );
}