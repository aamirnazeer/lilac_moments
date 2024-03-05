import classNames from 'classnames';
import classes from './Header.module.scss';

export default function Header() {
  return (
    <div>
      <p className={classNames(classes.red, classes.under)}>this is a header</p>
    </div>
  );
}
