import { useDispatch, useSelector } from 'react-redux';
import { updateUsiaAsync } from './userSlice';
import { RootState } from '../../store';

function UserSliceKonsumer() {
  const dispatch = useDispatch();
  const { nama, usia, createdAt } = useSelector(
    (state: RootState) => state.user
  );

  return (
    <div onClick={() => dispatch(updateUsiaAsync(10))}>
      Tes, usia {usia}, nama {nama}, dibuat sejak {createdAt}
    </div>
  );
}

export default UserSliceKonsumer;
