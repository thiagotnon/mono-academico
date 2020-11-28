import React, { useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { mask, unMask } from "remask";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(props.valor);
  }, [props]);

  const id = props.id ? props.id : props.name;
  const label_width = props.label_width ? props.label_width : 3;
  const inputWidth = props.inputWidth ? props.inputWidth : 12 - label_width;

  const { errors, register, validator } = props.reference;
  const required = () =>
    validator[props.name]?.required ? (
      <span className="text-danger">*</span>
    ) : (
      ""
    );

  function handleChange(event) {
    const valor = props.mask
      ? mask(unMask(event.target.value), props.mask)
      : event.target.value;
    setValue(valor);
  }

  return (
    <>
      <Form.Group as={Row} controlId={id}>
        <Form.Label className="text-right" column sm={label_width}>
          {props.label}: {required()}
        </Form.Label>
        <Col sm={inputWidth}>
          <Form.Control
            ref={register(validator[props.name])}
            isInvalid={errors[props.name]}
            value={value}
            onChange={handleChange}
            {...props}
          />
          <Form.Control.Feedback type="invalid">
            {errors[props.name]?.message}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>
    </>
  );
};
