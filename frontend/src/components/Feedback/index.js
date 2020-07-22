import React from 'react';
import styles from './feedback.module.scss';
import Uploader from '../Uploader';

function Feedback({ name }) {
  return (
    <>
      <form>
        <p>{name}</p>
        <div>Оцените это место</div>
        <div>⭐⭐⭐⭐⭐</div>
        <div>Комментарии</div>
        <Uploader />
        <input placeholder="Поделитесь мнением про плюсы и минусы этого места"></input>
        <button type="submit">Отправить</button>
        <button>Отменить</button>
      </form>
    </>
  );
}

export default Feedback;