import classNames from 'classnames'

export function cn(...classes: (string | undefined | null | false)[]) {
	return classNames(...classes)
}
