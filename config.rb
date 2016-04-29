require_relative "./lib/build_cleaner"

after_configuration do
  sprockets.append_path File.join root.to_s, "bower_components"
end
###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

###
# Helpers
###

set :url_root, 'http://khalilgharbaoui.codez.it'

activate :search_engine_sitemap



configure :build do
  activate :build_cleaner
end

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  # blog.prefix = "blog"

  blog.permalink = "{title}"

# blog.permalink = "{year}/{month}/{day}/{title}.html"
  # Matcher for blog source files
  # blog.sources = "{year}-{month}-{day}-{title}.html"
  # blog.taglink = "tags/{tag}.html"
  blog.layout = "article_layout"
  # blog.summary_separator = /(READMORE)/
  # blog.summary_length = 250
  # blog.year_link = "{year}.html"
  # blog.month_link = "{year}/{month}.html"
  # blog.day_link = "{year}/{month}/{day}.html"
  # blog.default_extension = ".markdown"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  # Enable pagination
  # blog.paginate = true
  # blog.per_page = 10
  # blog.page_link = "page/{num}"


  blog.paginate = true

end

activate :directory_indexes
activate :relative_assets
set :relative_links, true

###
# Markdown
###
activate :syntax, line_numbers: true
set :markdown_engine, :redcarpet
set :markdown, fenced_code_blocks: true,
    smartypants: true,
    tables:true,
    autolink: true









page "/feed.xml", layout: false
# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  	activate :minify_css

  # Minify Javascript on build
  	require 'uglifier'
  	activate :minify_javascript
  	set :js_compressor, Uglifier.new(:comments => :none)

  # Enable cache buster
  # activate :asset_hash



  # Minify HTML on build
  activate :minify_html

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

activate :gzip



activate :deploy do |deploy|
  deploy.deploy_method = :git
  deploy.branch = 'master'
  deploy.build_before = true
  deploy.remote   = 'https://github.com/khalilgharbaoui/khalilgharbaoui.github.io.git'
end
