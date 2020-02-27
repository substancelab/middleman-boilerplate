# frozen_string_literal: true

# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page "/*.xml", :layout => false
page "/*.json", :layout => false
page "/*.txt", :layout => false

activate :directory_indexes

webpack_command = "node_modules/webpack/bin/webpack.js"
webpack_options = if build?
  "--mode=production --bail -p"
else
  "--mode=development --watch -d --progress --color"
end
activate \
  :external_pipeline,
  :name => :webpack,
  :command => [webpack_command, webpack_options].join(" "),
  :source => ".tmp/webpack-build",
  :latency => 1
