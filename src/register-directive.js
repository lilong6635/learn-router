import loadingDirective from '@/components/base/loading/loading-directive'

export default function registerDirective(app) {
  app.directive('loading', loadingDirective)
}
