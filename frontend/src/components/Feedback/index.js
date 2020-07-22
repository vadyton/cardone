import React from 'react';
import styles from './feedback.module.scss';

function Feedback() {
  return (
    <>
      <form>
        <p>Здесь должно быть название сервиса</p>
        <div>Оцените это место</div>
        <div>⭐⭐⭐⭐⭐</div>
        <div>Комментарии</div>
        <input placeholder="Поделитесь мнением про плюсы и минусы этого места"></input>
        <button type="submit">Отправить</button>
        <button>Отменить</button>
      </form>
    </>
  );
}

export default Feedback;
