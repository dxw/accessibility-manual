module Jekyll
  module PageFilters
    def children_of(all_pages, parent)
      all_pages.select { |p| child_of?(p, parent) }
    end

    def parent_of(all_pages, child)
      all_pages.find { |p| child_of?(child, p) }
    end

    def site_sections(all_pages)
      all_pages.select { |p| section?(p) }
    end

    private

    def child_of?(child, parent)
      parent_url = parent.respond_to?("url") ? parent.url : parent["url"]
      child_url = child.respond_to?("url") ? child.url : child["url"]

      return false if parent_url == child_url

      Regexp.new("^#{parent_url}/?[\\w\\-]+(\\.html|/)?$").match?(child_url)
    end

    def section?(page)
      item_crumbs = page.url.split("/")
      return item_crumbs.size == 2 && page.name == "index.md"
    end
  end
end

Liquid::Template.register_filter(Jekyll::PageFilters)
