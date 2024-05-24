import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setEntryValue, setResetSearch } from "./searchSlice"

export default function Search() {
  const entryValue = useAppSelector(state => state.search.entryValue)
  const dispatch = useAppDispatch()

  return (
    <>
      <input
        type="text"
        value={entryValue}
        onChange={e => {
          dispatch(setEntryValue(e.target.value))
        }}
        placeholder=""
      />
    </>
  )
}
